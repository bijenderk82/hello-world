function extractTableNamesFromView(viewQuery) {
  // Regular expression to match table names following FROM or JOIN
  const regex = /(FROM|JOIN)\s+([A-Za-z_]+\.[A-Za-z_]+\.[A-Za-z_]+|[A-Za-z_]+\.[A-Za-z_]+|[A-Za-z_]+)/g;

  const tableNames = [];
  let match;

  while ((match = regex.exec(viewQuery)) !== null) {
    const tableName = match[2]; // Extract the table name (group 2)
    tableNames.push(tableName);
  }

  return tableNames;
}

// Example view query
const viewQuery = "SELECT * FROM source1.schema1.table1 JOIN schema2.table2 ON table3 WHERE table4.column FROM table5";

const tableNames = extractTableNamesFromView(viewQuery);

console.log(tableNames);
