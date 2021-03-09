import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import PlantsItem from "../components/PlantsItem";

const PlantList = observer(() => {
    const {plant} = useContext(Context)

    return (
        <Row className="d-flex" >
            {plant.plants.map(plant =>
                <PlantsItem key={plant.id} idcard={plant.id} plant={plant} />
            )}
        </Row>
    );
});

export default PlantList;