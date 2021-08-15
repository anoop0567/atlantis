import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { PLANS } from '../assets/db/data';
import { COLORS, FONTS, ICONS } from '../constants';
import globalStyles from '../styles/global';

const Recharge = ({ navigation }) => {

  const browseTab = [
    { id: '1', type: 'RECOMMENDED', text: 'Best Offers for You' },
    { id: '2', type: 'POPULAR', text: 'Popular' },
    { id: '3', type: 'SPECIAL', text: 'Special Recharge' },
    { id: '4', type: 'DATA', text: 'Data' }
  ]

  const [browsePack, setBrowsePack] = useState('RECOMMENDED');
  const onBrowseTabPress = (tab) => {
    setBrowsePack(tab);
    setDataPlans(tab);
  }

  const [plans, setPlans] = useState([]);
  const setDataPlans = (category) => {
    const plans = PLANS.filter(plan => plan.category === category);
    setPlans([...plans]);
  }

  useEffect(() => {
    setDataPlans(browsePack);
  }, []);

  // render brows nav tab
  const renderBrowseNavItem = ({ item, index }) => {
    const navItemStyles = [styles.navItem];
    const navLinkStyles = [styles.navLink];
    if (browsePack == item.type) {
      navItemStyles.push(styles.navItemActive);
      navLinkStyles.push(styles.navLinkActive);
    }
    if (index == 0) {
      navItemStyles.push({ marginLeft: 38 })
    }
    return (
      <TouchableOpacity
        style={navItemStyles}
        onPress={() => onBrowseTabPress(item.type)}
      >
        <Text style={navLinkStyles}>{item.text}</Text>
      </TouchableOpacity>
    );
  }

  // render plan card
  const renderPlanCard = ({ item }) => (
    <View style={styles.planCard}>
      <View style={styles.planHeader}>
        <Text style={styles.planAmount}>{item.amount}</Text>
        <TouchableOpacity style={globalStyles.primaryButton}>
          <Text style={globalStyles.primaryButtonText}>Select</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.planValidity}>Validity: {item.validity}</Text>
      <Text style={styles.planDescription}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={[globalStyles.droidSafeArea]}>
      <TouchableOpacity style={styles.closeContainer}>
        <Image source={ICONS.Close} style={styles.closeIcon} />
      </TouchableOpacity>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Browse Plans</Text>
        <Text style={styles.subheading}>for Airtel Kolkata</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          keyboardShouldPersistTaps
          style={styles.searchInput}
          placeholder="Search Plan Amount, Talktime"
          placeholderTextColor="rgba(38, 50, 56, 0.4)" />
        <TouchableOpacity>
          <Image source={ICONS.Search} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      <View style={[styles.browsePlansContainer]}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={browseTab}
          renderItem={renderBrowseNavItem}
          keyExtractor={item => item.id}
        />
      </View>
      <FlatList
        style={[styles.plansContainer]}
        showsVerticalScrollIndicator={false}
        data={plans}
        renderItem={renderPlanCard}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 38,
    paddingBottom: 0
  },
  heading: {
    color: COLORS.primary,
    ...FONTS.h1
  },
  subheading: {
    color: COLORS.secondary,
    ...FONTS.body2
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 38,
    marginVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(38, 50, 56, 0.1)'
  },
  searchInput: {
    ...FONTS.body3,
    flex: 1,
    color: COLORS.secondary,
    height: 40,
    paddingVertical: 8,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginHorizontal: 12
  },
  browsePlansContainer: {
    borderBottomColor: 'rgba(151, 151, 151, 0.3)',
    borderBottomWidth: 1
  },
  navItem: {
    paddingVertical: 8,
    marginRight: 28,
  },
  navItemActive: {
    borderBottomWidth: 3,
    borderBottomColor: COLORS.primary,
    borderRadius: 1
  },
  navLink: {
    ...FONTS.body3,
    color: 'rgba(38, 50, 56, 0.4)'
  },
  navLinkActive: {
    color: 'rgba(38, 50, 56, 0.8);'
  },
  plansContainer: {
    paddingHorizontal: 38,
    marginBottom: 28
  },
  planCard: {
    paddingVertical: 18,
    borderBottomColor: '#979797',
    borderBottomWidth: 1
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  planAmount: {
    ...FONTS.h1
  },
  planValidity: {
    ...FONTS.h4,
    marginVertical: 8,
    color: 'rgba(38, 50, 56, 0.7)'
  },
  planDescription: {
    ...FONTS.body4,
    color: 'rgba(38, 50, 56, 0.7)'
  },
  closeContainer: {
    position: 'absolute',
    top: 63,
    right: 38
  },
  closeIcon: {
    width: 24,
    height: 24
  }
});

export default Recharge;