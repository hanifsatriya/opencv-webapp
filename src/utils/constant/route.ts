const ROUTES = {
  BASE_URL: "/",
  AUTH: {
    LOGIN: "/login",
    REGISTRATION: {
      TNC_REGIS: "/registration/tnc",
      ACCOUNT_REGIS_EFORM: "/registration/account-registration/e-form",
      ACCOUNT_REGIS_UPLOAD: "/registration/account-registration/upload-doc",
      ACCOUNT_REGIS_BRANCH: "/registration/account-registration/choose-branch",
      ACCOUNT_REGIS_SEGMENT:
        "/registration/account-registration/choose-segment",
      ACCOUNT_REGIS_USER_ADMIN:
        "/registration/account-registration/admin-registration",
      ACCOUNT_REGIS_SUMMARY:
        "/registration/account-registration/summary-registration",
    },
  },
  ADMIN: {
    DASHBOARD: "/user/dashboard",
    PAYROLL: {
      LIST_GROUP_PAYROLL: "/user/payroll/list-group-payroll",
      ADD_PAYROLL: {
        ADD_SOF_GROUP_PAYROLL: "/user/payroll/add/add-sof",
        ADD_MEMBER_GROUP_PAYROLL: "/user/payroll/add/add-member",
      },
      DETAIL_PAYROLL: "/user/payroll/detail-payroll",
      EDIT_PAYROLL: {
        EDIT_SOF_GROUP_PAYROLL: "/user/payroll/edit/edit-sof",
        EDIT_MEMBER_GROUP_PAYROLL: "/user/payroll/edit/edit-member",
      },
      SEND_PAYROL: "/user/payroll/send-payroll",
      CONDIRMATION_PAYROLL: "/user/payroll/confirmation-payroll",
      RECEIPT_PAYROLL: "/user/payroll/receipt-payroll",
      DETAIL_RECEIPT_PAYROLL: "/user/payroll/detail-receipt-payroll",
    },
    SOFT_TOKEN: "/user/soft-token",
    TRANSFER: {
      INPUT_TRANSFER: "/user/transfer/input-transfer",
      NOMINAL_TRANSFER: "/user/transfer/nominal-transfer",
      CONFIRM_TRANSFER: "/user/transfer/confirmation-transfer",
      RECEIPT_TRANSFER: "/user/transfer/receipt-transfer",
      DETAIL_RECEIPT_TRANSFER: "/user/transfer/detail-receipt-transfer",
    },
    PAYMENT: {
      INPUT_PAYMENT: "/user/payment/input-payment",
      CONFIRM_PAYMENT: "/user/payment/confirmation-payment",
      RECEIPT_PAYMENT: "/user/payment/receipt-payment",
      DETAIL_RECEIPT_PAYMENT: "/user/payment/detail-receipt-payment",
    },
    PURCHASE: {
      INPUT_PURCHASE: "/user/purchase/input-purchase",
      NOMINAL_PURCHASE: "/user/purchase/nominal-purchase",
      CONFIRM_PURCHASE: "/user/purchase/confirmation-purchase",
      RECEIPT_PURCHASE: "/user/purchase/receipt-purchase",
    },
    SETTINGS: {
      REGISTRATION_SOFTOKEN: "/user/settings/registration-softtoken",
    },
    WORKFLOW: {
      LIST_WORKFLOW: "/user/workflow/list-workflow",
      ADD_WORKFLOW: "/user/workflow/add-workflow",
      EDIT_WORKFLOW: "/user/workflow/edit-workflow",
    },
    APPROVAL: {
      LIST_APPROVAL_TRANSFER: "/user/approval/list-approval/transfer",
      LIST_APPROVAL_PAYROLL: "/user/approval/list-approval/payroll",
      LIST_APPROVAL_PAYMENT: "/user/approval/list-approval/payment",
      LIST_APPROVAL_PURCHASE: "/user/approval/list-approval/purchase",
      DETAIL_APPROVAL: "/user/approval/detail-approval",
    },
    COMPANY: {
      BASE_URL: "/user/company",
      ADD_MANAGEMENT_USER: "/user/company/add-user",
    },
  },
  PREVIEW: {
    BASE_URL: "/preview",
    ICONS: "/preview/icons",
  },
};

export { ROUTES };
