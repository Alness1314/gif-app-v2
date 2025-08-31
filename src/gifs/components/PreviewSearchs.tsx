interface Props {
  searches: string[],
  onClicked: (term: string) => void;
}

export const PreviewSearchs = ({ searches, onClicked }: Props) => {
  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <h2 className="mb-3 font-bold text-3xl">Busquedas previas</h2>
      <ul className="flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
        {searches.map((item) => (
          <li key={item} onClick={() => onClicked(item)}>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-800 dark:text-gray-200 border border-gray-700">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
