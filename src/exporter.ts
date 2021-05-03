import xlsx from 'xlsx';

import { SheetData } from './index';

/**
 * Exports data to a spreadsheet.
 * Each sheet data is outputted to a separate sheet.
 * Output path is currently hardcoded.
 *
 * @param data The data to be outputted, array of sheetData.
 * @param fileFormat The fileFormat of the data. (.xlxs, .ods) - See xlsx for all available formats.
 * @returns {Promise<void>}
 */
const xlxs = async (data: SheetData[], fileFormat: string): Promise<void> => {
  const filePath = `/code/sample-output.${fileFormat}`;
  const workbook = xlsx.utils.book_new();

  console.info(`Exporting dataset to ${filePath}`);

  for (let index = 0; index < data.length; index++) {
    const sheetData = data[index];
    const worksheet = xlsx.utils.json_to_sheet(sheetData.rows);
    xlsx.utils.book_append_sheet(workbook, worksheet, sheetData.name);
  }

  xlsx.writeFile(workbook, filePath);
};

export default {
  xlxs,
};
