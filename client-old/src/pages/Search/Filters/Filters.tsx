import React from 'react';
import {
  IonButton,
  IonModal,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

const Filters: React.FC<IFilterProps> = ({
  modalIsOpen,
  setModalIsOpen,
}) => {
  return (
    <IonModal
      mode="ios"
      keyboardClose={true}
      isOpen={modalIsOpen}
      swipeToClose={true}
      onDidDismiss={(_e) => setModalIsOpen(false)}
    >
      <IonToolbar>
        <IonTitle>Filter and Sort</IonTitle>
      </IonToolbar>
      <div className="ion-padding">
        <h1>hi</h1>
        <h2>its time</h2>
        <h3>for your haircut</h3>
        <h4>dont be so shy now</h4>
        <h5>its all gonna be fine</h5>
        <h6>just sit down anr relax</h6>
      </div>
      <IonButton onClick={(_e: any) => setModalIsOpen(false)}>
        Save and Close
      </IonButton>
    </IonModal>
  );
};

interface IFilterProps {
  setModalIsOpen: Function;
  modalIsOpen: boolean;
}

export default Filters;
