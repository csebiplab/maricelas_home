"client";

const BorderBottom = ({ classProps }) => {
  return (
    <div className={`${classProps?.parrent} mt-5`}>
      <div
        className={`${classProps?.child} border-b h-2 bg-secondary-50 border-secondary-600`}
      />
    </div>
  );
};

export default BorderBottom;
