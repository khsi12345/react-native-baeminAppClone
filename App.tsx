import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import AdBanner from './src/components/AdBanner';
import BuyComponent from './src/components/BuyComponent';
import BuyUnderComponent from './src/components/BuyUnderComponent';
import DirectAction from './src/components/DirectAction';
import DoGift from './src/components/DoGift';
import Footer from './src/components/Footer';
import MainSlick from './src/components/MainSlick/indes';
import NationwideTaste from './src/components/NationwideTaste';
import ShoppingLive from './src/components/ShoppingLive';
import TodaySale from './src/components/TodaySale';
import TopNavigate from './src/components/TopNavigate';
import DoThis from './src/DoThis';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      {/* <StatusBar /> */}
      <ScrollView style={styles.main}>
        <TopNavigate />
        <BuyComponent />
        <BuyUnderComponent />
        <MainSlick />
        <DirectAction />
        <TodaySale />
        <ShoppingLive />
        <DoGift />
        <NationwideTaste />
        <DoThis />
        <AdBanner />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    height: '100%',
    backgroundColor: 'rgb(237, 231, 230)',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
