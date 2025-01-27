import useFetchGlossaryTerms from "../../hooks/useFetchGlossaryTerms.ts";
import {
  glossaryContainerStyles,
  glossaryCardStyles,
  glossaryTitleStyles,
  glossaryDescriptionStyles,
} from "../../styles";
import "./Glossary.css";

export default function Glossary() {
  const { data, isLoading, isError } = useFetchGlossaryTerms();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !data) {
    return <p>Error</p>;
  }

  return (
    <div className={glossaryContainerStyles}>
      {data.map((d) => {
        const CardContent = (
          <div className="card-body">
            <h2 className={glossaryTitleStyles}>{d.title}</h2>
            <p className={glossaryDescriptionStyles}>{d.description}</p>
          </div>
        );

        // Если ссылка есть, оборачиваем карточку в <a>, если нет — просто выводим карточку
        return d.link ? (
          <a
            href={d.link}
            target="_blank"
            rel="noopener noreferrer"
            className={glossaryCardStyles}
            key={d.id}
          >
            {CardContent}
          </a>
        ) : (
          <div className={glossaryCardStyles} key={d.id}>
            {CardContent}
          </div>
        );
      })}
    </div>
  );
}
