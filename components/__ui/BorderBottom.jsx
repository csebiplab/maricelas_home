"client";

const BorderBottom = ({ classProps }) => {
  return (
    <div className={`${classProps}`}>
      <div
        className={`border-b h-2 bg-secondary-50 border-secondary-600 w-24`}
      />
    </div>
  );
};

export default BorderBottom;
