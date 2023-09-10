"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormProvider = void 0;
const formik_1 = require("formik");
const formik_2 = require("formik");
const FormProvider = ({ form, children }) => (
  // casting because formik doesn't fancy our stricter typing
  <formik_1.FormikProvider value={form}>
    <formik_2.Form action="post" noValidate={true} onSubmit={form.handleSubmit}>
      {children}
    </formik_2.Form>
  </formik_1.FormikProvider>
);
exports.FormProvider = FormProvider;
