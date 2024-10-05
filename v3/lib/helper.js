import moment from 'moment';

/**
 create a new object groupedByDate
 */
export const groupedByDate = (data, dateKey, currentlyForm, format) => {
  return data.reduce((acc, item) => {
    const getMonth = moment(item[dateKey], currentlyForm).format(
      format ?? 'MMMM YYYY'
    );
    acc[getMonth] = acc[getMonth] || [];
    acc[getMonth].push(item);
    return acc;
  }, {});
};

export const isActiveLink = (pathname, path) => {
  return pathname === path ? 'text-black' : 'text-slate-600';
};
