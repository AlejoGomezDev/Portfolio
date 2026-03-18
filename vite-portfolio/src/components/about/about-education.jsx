import EducationItem from "./education-item";
import { EDUCACION } from "../../data/education";
import { SectionTitle } from "../ui/SectionTitle";
export function AboutEducation(
    {
        className = ''
    }
) {

    return (
        <section className={`text-center h-full ${className} `}>
            <div className="space-y-6">
                {
                    EDUCACION.filter(e => e.tipo === "academica").sort((a, b) => Number(b.fecha) - Number(a.fecha)).map((item) =>
                    (
                        <EducationItem key={item.id} item={item} />
                    )
                    )
                }
                {
                    EDUCACION.filter(e => e.tipo === "certificacion").map((item) =>
                    (
                        <EducationItem key={item.id} item={item} />

                    )
                    )
                }

            </div>
        </section>
    );
};