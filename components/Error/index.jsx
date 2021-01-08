import Head from "next/head";

const Error = ({ message }) => {
  return (
    <div className="mt-5 bg-primary p-2 rounded text-center font-semibold text-white text-lg">
      {message}
    </div>
  );
};

export default Error;
