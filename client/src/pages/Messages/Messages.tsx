import React, { useEffect, useState } from 'react';
import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonList,
  IonNav,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

const Messages: React.FC = () => {
  const [conversations, setConversations] = useState<IConversation[]>(
    [],
  );

  useEffect(() => {
    setConversations([
      {
        name: 'hello',
        lastMessage: 'oh hey there',
        lastMessageDate: new Date(),
        convoAvatar:
          'https://lh3.googleusercontent.com/ogw/ADGmqu_frRjTU7Mt_WO4GLdRTWkM3NST1w6Re0xp-cof=s32-c-mo',
      },
      {
        name: 'goodbye',
        lastMessage: 'oh hey there',
        lastMessageDate: new Date(),
        convoAvatar:
          'https://lh3.googleusercontent.com/ogw/ADGmqu_frRjTU7Mt_WO4GLdRTWkM3NST1w6Re0xp-cof=s32-c-mo',
      },
    ]);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Messages</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonNav></IonNav>
        <IonList>
          {conversations.map(
            ({ name, lastMessage, lastMessageDate, convoAvatar }) => (
              <IonItem>
                <IonAvatar>
                  <IonImg src={convoAvatar} alt={name} />
                </IonAvatar>
                <div style={{ marginLeft: '1rem' }}>
                  <h3>{name}</h3>
                  <p>{lastMessage}</p>
                  <p>
                    <small>{lastMessageDate.toString()}</small>
                  </p>
                </div>
              </IonItem>
            ),
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

interface IConversation {
  name: string;
  lastMessage: string;
  lastMessageDate: Date;
  convoAvatar: string;
}

export default Messages;
