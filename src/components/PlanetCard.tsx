import { Avatar } from "primereact/avatar";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import type { Planet } from "../model/planet";

interface PlanetCardProps {
  planets: Planet[];
}

const PlanetCard = ({ planets }: PlanetCardProps) => {
    const imageBodyTemplatev2 = (planet: Planet) => {
        return <Avatar image={planet.image} shape="circle" />;
    };

    return (
        <DataTable value={planets} tableStyle={{ minWidth: "50rem" }}>
            <Column header="Image" body={imageBodyTemplatev2}></Column>
            <Column field="id" header="id"></Column>
            <Column field="name" header="name"></Column>
            <Column field="isDestroyed" header="isDestroyed"></Column>
            <Column field="description" header="description"></Column>
        </DataTable>
    );
};

export default PlanetCard;