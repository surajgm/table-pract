export const columnTitle = [
  {
    title: "Name",
    field: "name",
    sorting: false,
  },
  {
    title: "Age",
    field: "age",
    emptyValue: () => <em>null</em>,
  },
  {
    title: "Email",
    field: "email",
    filterPlaceholder: "Filter by Placeholder",
  },
  {
    title: "Phone Number",
    field: "phone",
  },
  {
    title: "City",
    field: "city",
    // lookup: { kathmandu: "kath" },
    export: false,
  },
  {
    title: "School Fee",
    field: "fee",
    type: "currency",
    currencySetting: {
      currencyCode: "NPR",
      minimumFractionDigits: 1,
    },
    align: "left",
  },
  {
    title: "Gender",
    field: "gender",
    // by default align left
    align: "left",
    lookup: { M: "Male", F: "Female" },
  },
];
