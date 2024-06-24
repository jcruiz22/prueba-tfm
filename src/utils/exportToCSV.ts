import { saveAs } from 'file-saver';
import dayjs from 'dayjs';
import type { Customer } from '@/components/pages/customer/customers-table';

export const exportToCSV = (data: Customer[], filename: string) => {
  const csvRows = [];
  const headers = ['ID', 'Name', 'Email', 'Phone', 'Address', 'Created At'];
  csvRows.push(headers.join(','));

  for (const customer of data) {
    const row = [
      customer.id,
      customer.name,
      customer.email,
      customer.phone,
      `${customer.address.street}, ${customer.address.city}, ${customer.address.state}, ${customer.address.country}`,
      dayjs(customer.createdAt).format('MMM D, YYYY'),
    ];
    csvRows.push(row.join(','));
  }

  const csvString = csvRows.join('\n');
  const blob = new Blob([csvString], { type: 'text/csv' });
  saveAs(blob, `${filename}.csv`);
};
