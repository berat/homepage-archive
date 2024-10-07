import Airtable from 'airtable';

Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY
});
const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

const getMinifiedRecord = record => {
  if (!record.fields.completed) {
    record.fields.completed = false;
  }
  return {
    id: record.id,
    fields: record.fields
  };
};

const minifyRecords = records => {
  return records.map(record => getMinifiedRecord(record));
};

const getRecords = async (title: string) => {
  const records = await base(title).select().all();
  const data = await minifyRecords(records);

  return data;
};

const createRecords = async (title: string, data: any[]) => {
  const records = await base(title).create(data);

  return records;
};

const updateRecords = async (title: string, data: any[]) => {
  const records = await base(title).update(data);

  return records;
};

export { getRecords, createRecords, updateRecords };
