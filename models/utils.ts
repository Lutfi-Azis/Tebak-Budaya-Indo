import { format } from "mysql";
import { pool } from "../db";

export type WhereData = {
  [key: string]: string | number | Date | null | undefined;
};

export type GetOption = {
  /**
   * Property names to get.
   * Don't use this for user-defined input. UNSAFE!
   */
  props?: string[];
  /**
   * Table name.
   */
  table: string;
  where?: WhereData;
};

export async function get<T>(options: GetOption): Promise<T[]> {
  let query = "SELECT";

  if (options.props) {
    let first = true;
    for (const prop in options.props) {
      if (!first) query += ", ";
      else query += " ";
      query += `\`${prop}\``;
      if (prop.includes("_")) query += ` AS \`${snakeToCamelCase(prop)}\``;
    }
  } else query += " *";

  query += ` FROM \`${options.table}\``;

  if (options.where) {
    query += " " + buildSqlWhereQuery(options.where);
  }

  return camelCasifyRows(await runQuery(query));
}

export function runQuery(query: string): Promise<any> {
  return new Promise((res, rej) => {
    pool.query(query, (err, results) => {
      if (err) {
        rej(err);
        return;
      }
      res(results);
    });
  });
}

export function buildSqlWhereQuery(data: WhereData) {
  const values: (string | number | Date | null | undefined)[] = [];
  var output = "WHERE ";
  var first = true;

  for (const key in data) {
    if (!first) output += " AND ";

    let value = data[key];
    values.push(value);
    output += `\`${key}\` = ?`;
    first = false;
  }

  output += ";";
  output = format(output, values);
  return output;
}

export function camelCasifyRows(rows: any[]): any[] {
  const columnNames = Object.keys(rows[0]);
  const newColumnNames = columnNames.map((k) => snakeToCamelCase(k));
  const newRows = rows.map((row) => {
    const newRow: any = {};
    columnNames.forEach((key, i) => {
      newRow[newColumnNames[i]] = row[key];
    });
    return newRow;
  });
  return newRows;
}

export function snakeToCamelCase(s: string) {
  return s.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
}
