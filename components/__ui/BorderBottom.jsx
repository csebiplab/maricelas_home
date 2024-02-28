"client";

const BorderBottom = ({ classProps }) => {
  return (
    <div className={`${classProps?.parrent} mt-5`}>
      <div
        className={`${classProps?.child} border-b h-1 bg-secondary-300 border-secondary-600`}
      />
    </div>
  );
};

export default BorderBottom;
