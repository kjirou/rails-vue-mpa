export const pagePropsValidation = {
  csrfParam: {
    type: String,
    required: true,
  },
  csrfToken: {
    type: String,
    required: true,
  },
  initialPageData: {
    type: Object,
    required: true,
  },
};
