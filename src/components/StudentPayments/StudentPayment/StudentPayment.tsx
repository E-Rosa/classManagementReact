import React from "react";
import { PaymentModel } from "../../../models/paymentModel.js";
import "./StudentPayment.css";

interface StudentPaymentProps {
  paymentData: PaymentModel;
  handleStatusClick: React.MouseEventHandler<HTMLElement>;
  handlePaymentChange: React.ChangeEventHandler<HTMLElement>;
  handlePaymentDelete: React.MouseEventHandler<HTMLElement>;
}
const StudentPayment: React.FunctionComponent<StudentPaymentProps> = (
  props
) => {
  return (
    <>
      <form className="form-container payment-form-container">
        <div className="row-container ">
          <button
            className={`status-button ${props.paymentData.status} paymentStatus`}
            name="status"
            value={props.paymentData.status}
            onClick={props.handleStatusClick}
            id={props.paymentData.id}
          />
        </div>
        <div className="payment-row-container">
          <div className="row-container paymentValue-and-symbol-container">
            <span className="paymentValue-input">R$</span>
            <input
              name="value"
              className="number-input paymentValue-input"
              type="number"
              defaultValue={props.paymentData.value}
              onChange={props.handlePaymentChange}
            />
          </div>
          <input
            name="date"
            className="date-input"
            type="date"
            value={props.paymentData.frontEnd.dateString}
            onChange={props.handlePaymentChange}
          />
        </div>
        <div className="row-container">
          <input
            name="student_name"
            className="text-input"
            type="text"
            defaultValue={props.paymentData.frontEnd.student_name}
            onChange={props.handlePaymentChange}
          />
          <input
            name="teacher_name"
            className="text-input"
            type="text"
            defaultValue={props.paymentData.frontEnd.teacher_name}
            onChange={props.handlePaymentChange}
          />
        </div>
        <button className="delete-button payment-delete-button"></button>
      </form>
    </>
  );
};

export { StudentPayment, StudentPaymentProps };
