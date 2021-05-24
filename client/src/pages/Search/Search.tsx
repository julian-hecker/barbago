import React, { useEffect, useState } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { filterOutline as filterIcon } from 'ionicons/icons';

import SearchMap from './SearchMap/SearchMap';
import SearchResults from './SearchResults/SearchResults';

import { ISearchResult } from './SearchResult';
import Filters from './Filters/Filters';

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [tab, setTab] = useState<'map' | 'results'>('results');
  const [results, setResults] = useState<ISearchResult[]>([]);

  useEffect(() => {
    setResults([
      {
        name: 'a good barber',
        position: [41.01, -73.83],
      },
      {
        name: 'a stinky barber',
        position: [41.0, -73.84],
      },
      {
        name: 'a cool barber',
        position: [40.99, -73.83],
      },
      {
        name: 'a hipster barber',
        position: [41.0, -73.82],
      },
      {
        name: 'a russian barber',
        position: [41.0, -73.83],
      },
    ]);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Barber Search</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonButton
            color="primary"
            size="small"
            slot="end"
            onClick={(_e: any) => setModalIsOpen(true)}
            style={{ marginRight: '12px' }}
          >
            <IonIcon icon={filterIcon} />
          </IonButton>
          <IonSearchbar
            slot="start"
            value={search}
            onIonChange={(e: CustomEvent) =>
              setSearch(e.detail.value)
            }
            style={{ paddingBottom: 0 }}
          />
        </IonToolbar>
        <IonToolbar>
          <IonSegment value={tab}>
            <IonSegmentButton
              value="results"
              onClick={(_e) => setTab('results')}
            >
              Results
            </IonSegmentButton>
            <IonSegmentButton
              value="map"
              onClick={(_e) => setTab('map')}
            >
              Map
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <Filters
        setModalIsOpen={setModalIsOpen}
        modalIsOpen={modalIsOpen}
      />
      <IonContent fullscreen>
        {tab === 'results' ? (
          <SearchResults results={results} />
        ) : (
          <SearchMap results={results} />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Search;
