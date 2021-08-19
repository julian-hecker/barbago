import React from 'react';
import { IonList, IonItem } from '@ionic/react';

import { ISearchResult } from '../SearchResult';

const SearchResults: React.FC<ISearchResultsProps> = ({
  results,
}) => (
  <IonList>
    {results &&
      results.map((result, index) => (
        <IonItem key={index}>{result.name}</IonItem>
      ))}
  </IonList>
);

interface ISearchResultsProps {
  results: ISearchResult[];
}

export default SearchResults;
