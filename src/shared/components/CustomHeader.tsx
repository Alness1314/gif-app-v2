interface Props {
  title: string;
  description?: string;
}

export const CustomHeader = ({ title, description }: Props) => {
  return (
    <div className="p-5 flex flex-col items-center text-center">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="pt-2">{description}</p>
    </div>
  );
};
