import React, { useRef } from "react";
import VoucherContent from "../components/VoucherContent";
import { useReactToPrint } from "react-to-print";

const Voucher = () => {
  // Create a ref for the content you want to print
  const contentRef = useRef(null);

  // Initialize the print function using the ref
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div>
      {/* Print Button */}
      <button onClick={() => reactToPrintFn()}>Print</button>

      {/* Voucher Content Component */}
      <VoucherContent printref={contentRef} />
    </div>
  );
};

export default Voucher;
