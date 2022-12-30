import React, { FunctionComponent, SetStateAction } from "react";
import { StudentPayment } from "./StudentPayment/StudentPayment";
import { PaymentModel, PaymentModelFrontEnd } from "../../models/paymentModel";
import { SubmitButton } from "../_globals/SubmitButton/SubmitButton";

const StudentPayments: React.FunctionComponent = () => {
  const studentID = window.localStorage.getItem("studentID");
  const studentName = window.localStorage.getItem("studentName");
  const [paymentsState, setPaymentsState] = React.useState<PaymentModel[]>([]);

  function handleStatusClick(event: React.MouseEvent) {}
  function handlePaymentChange(event: React.ChangeEvent) {}
  function handlePaymentSubmit(event: React.FormEvent) {}
  function handlePaymentDelete(event: React.MouseEvent) {}
  function handlePaymentUpdate(event: React.FormEvent) {}
  function handlePaymentAdd(event: React.MouseEvent) {}
  function generatePaymentComponents(
    paymentsInstances: PaymentModel[] | undefined
  ) {
    if (paymentsInstances != undefined) {
      return paymentsInstances.map((paymentInstance: PaymentModel) => {
        return (
          <StudentPayment
            key={paymentInstance.id}
            paymentData={paymentInstance}
            handleStatusClick={handleStatusClick}
            handlePaymentChange={handlePaymentChange}
            handlePaymentDelete={handlePaymentDelete}
          />
        );
      });
    } else {
      return [
        <StudentPayment
          paymentData={new PaymentModel()}
          handleStatusClick={handleStatusClick}
          handlePaymentChange={handlePaymentChange}
          handlePaymentDelete={handlePaymentDelete}
        />,
      ];
    }
  }

  React.useEffect(() => {
    fetch(`http://localhost:5000/api/classManager/payments/${studentID}`)
      .then((res: Response) => {
        return res.json();
      })
      .then((data: PaymentModel[]) => {
        setPaymentsState(data)
      });
  }, []);
  return (
    <>
      <div className="StudentPayments">
        <div className="student-payment-cards-container row-container">
          {generatePaymentComponents(paymentsState)}
        </div>
        <SubmitButton handleSubmit={handlePaymentSubmit}></SubmitButton>
      </div>
    </>
  );
};

export default StudentPayments;
