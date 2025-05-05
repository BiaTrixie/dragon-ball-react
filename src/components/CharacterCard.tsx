import { Avatar } from "primereact/avatar";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import type { Characters } from "../model/character";

interface CharacterCardProps {
  characters: Characters[];
}

const CharacterCard = ({ characters }: CharacterCardProps) => {
    const imageBodyTemplatev2 = (character: Characters) => {
        return <Avatar image={character.image} shape="circle" />;
    };

    return (
        <DataTable value={characters} tableStyle={{ minWidth: "50rem" }}>
            <Column header="Image" body={imageBodyTemplatev2}></Column>
            <Column field="id" header="id"></Column>
            <Column field="name" header="name"></Column>
            <Column field="race" header="race"></Column>
            <Column field="gender" header="gender"></Column>
            <Column field="ki" header="ki"></Column>
            <Column field="maxKi" header="maxKi"></Column>
            <Column field="affiliation" header="affiliation"></Column>
        </DataTable>
    );
};

export default CharacterCard;