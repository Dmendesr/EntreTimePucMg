import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';

import Eventos from './Eventos';

const Home = () => {
    const [index, setIndex] = useState(0);
    const [routes, setRoutes] = useState([
        { key: 'eventos', title: 'Eventos', icon: 'alien' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        eventos: Eventos,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            onRoutesChange={setRoutes}
            renderScene={renderScene}
        />
    );
};

export default Home;
