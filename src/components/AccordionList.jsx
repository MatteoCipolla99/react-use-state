import languages from "../data/languages";
import Accordion from "./Accordion";

export default function AccordionList() {
  return (
    <div className="accordion-list">
      {languages.map((elm, index) => {
        return (
          <Accordion
            key={index}
            title={elm.title}
            description={elm.description}
          />
        );
      })}
    </div>
  );
}
