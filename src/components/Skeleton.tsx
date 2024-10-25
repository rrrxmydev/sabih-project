const Skeleton = ({ style }: any) => {
  return (
    <div
      className={`animate-pulse bg-[#474747] ${style} rounded-md cursor-pointer`}
    ></div>
  );
};

export default Skeleton;
