import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity as Touchable,
} from 'react-native';

type ChangePictureProps = {
  pictureUrl?: string;
  onPress?: () => any;
};

const ChangePicture: React.FC<ChangePictureProps> = ({
  pictureUrl,
  onPress,
}) => {
  return (
    <Touchable onPress={onPress} style={{ position: 'relative' }}>
      <Image
        source={{ uri: pictureUrl ?? '' }}
        style={{
          width: 96,
          height: 96,
          backgroundColor: '#777777',
          borderRadius: 96 / 2,
        }}
      />
      <Text
        style={{
          position: 'absolute',
          width: 96,
          bottom: 0,
          textAlign: 'center',
          backgroundColor: '#333333dd',
          color: 'white',
        }}
      >
        Change Photo
      </Text>
    </Touchable>
  );
};

export default ChangePicture;
