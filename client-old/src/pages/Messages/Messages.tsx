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
        name: 'Clientus Ignorabamus',
        lastMessage:
          "oh hey there what's up! I totally missed our appt last week, totally sorry bout that! :P",
        lastMessageDate: new Date(2021, 4, 20, 23, 30),
        convoAvatar:
          'https://lh3.googleusercontent.com/ogw/ADGmqu_frRjTU7Mt_WO4GLdRTWkM3NST1w6Re0xp-cof=s32-c-mo',
      },
      {
        name: 'Fallacius Maxillianus',
        lastMessage: 'Any appointments for last week?',
        lastMessageDate: new Date(2021, 4, 10, 23, 30),
        convoAvatar:
          'https://lh3.googleusercontent.com/ogw/ADGmqu_frRjTU7Mt_WO4GLdRTWkM3NST1w6Re0xp-cof=s32-c-mo',
      },
      {
        name: 'Fraternus Maxillianus',
        lastMessage: 'boku no imouto taberu gohan',
        lastMessageDate: new Date(2021, 4, 30, 23, 30),
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
            (
              { name, lastMessage, lastMessageDate, convoAvatar },
              index,
            ) => {
              const datediff =
                (
                  (new Date().getTime() - lastMessageDate.getTime()) /
                  3600000
                ).toFixed(1) + ' hours ago';
              return (
                <IonItem key={`message-${index}`}>
                  <IonAvatar style={{ minWidth: '40px' }}>
                    <IonImg src={convoAvatar} alt={name} />
                  </IonAvatar>
                  <div style={{ marginLeft: '1rem' }}>
                    <h3>{name}</h3>
                    <p>{lastMessage.slice(0, 50)}</p>
                    <p>
                      <small>{datediff}</small>
                    </p>
                  </div>
                </IonItem>
              );
            },
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
