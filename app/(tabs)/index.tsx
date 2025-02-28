import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StatusBar,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Edad');
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const filterOptions = ['Edad', 'Poderes', 'Liga', 'Activo'];

  const superheroes = [
    {
      id: '1',
      nombre: 'Nombre Super',
      poderes: 'Vuelo, Super Fuerza',
      edad: '35',
      liga: 'Justicia',
      activo: 'Sí',
      image: null,
    },
    {
      id: '2',
      nombre: 'Nombre Super',
      poderes: 'Invisibilidad, Telepatía',
      edad: '28',
      liga: 'Vengadores',
      activo: 'Sí',
      image: null,
    },
    {
      id: '3',
      nombre: 'Nombre Super',
      poderes: 'Control Mental, Telekinesis',
      edad: '42',
      liga: 'X-Men',
      activo: 'No',
      image: null,
    },
  ];

  const toggleFilterOptions = () => {
    setShowFilterOptions(!showFilterOptions);
  };

  const selectFilter = (filter) => {
    setSelectedFilter(filter);
    setShowFilterOptions(false);
  };

  const renderSuperheroCard = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.imageContainer}>
          <Text style={styles.nameText}>Nombre{'\n'}Super</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Poderes:</Text>
          <Text style={styles.infoLabel}>Edad:</Text>
          <Text style={styles.infoLabel}>Liga:</Text>
          <Text style={styles.infoLabel}>Activo:</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#F7E733" barStyle="dark-content" />
      
      <View style={styles.header}>
        <Text style={styles.title}>SASH</Text>
        <Text style={styles.subtitle}>sacv</Text>
      </View>
      
      <Text style={styles.description}>Sección Amarilla de Super Heroes S.A. de C.V.</Text>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Super heroe super fuerte..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchIcon}>
          <Feather name="search" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Filtrar por:</Text>
        <TouchableOpacity style={styles.filterSelector} onPress={toggleFilterOptions}>
          <Text style={styles.filterText}>{selectedFilter}</Text>
          <Feather name="chevron-down" size={20} color="#000" />
        </TouchableOpacity>
        
        {showFilterOptions && (
          <View style={styles.filterOptions}>
            {filterOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.filterOption}
                onPress={() => selectFilter(option)}
              >
                <Text style={styles.filterOptionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
      
      <FlatList
        data={superheroes}
        renderItem={renderSuperheroCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF674',
    justifyContent: 'center' 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 12,
    color: '#000',
    marginBottom: 9,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold', 
    color: '#000',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 8,
    margin: 10,
    marginBottom: 16,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  searchIcon: {
    padding: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    alignItems: 'center',
    marginBottom: 16,
    position: 'relative',
  },
  filterLabel: {
    fontSize: 16,
    marginRight: 8,
    color: '#000',
  },
  filterSelector: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 250,
  },
  filterText: {
    fontSize: 16,
    color: '#000',
  },
  filterOptions: {
    position: 'absolute',
    top: 45,
    left: 70,
    backgroundColor: '#FFF',
    borderRadius: 8,
    width: 150,
    zIndex: 1,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  filterOption: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  filterOptionText: {
    fontSize: 16,
    color: '#000',
  },
  listContainer: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 16,
    margin: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  cardContent: {
    flexDirection: 'row',
  },
  imageContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#EEEEEE',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  nameText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  infoLabel: {
    fontSize: 14,
    marginBottom: 4,
    color: '#000',
  },
});