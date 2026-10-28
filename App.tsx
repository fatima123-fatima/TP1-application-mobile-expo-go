import { View, Text, StyleSheet } from 'react-native';

const produits = [
  { id: 1, nom: 'Clavier', prix: 120, stock: 5 },
  { id: 2, nom: 'Souris', prix: 80, stock: 8 },
  { id: 3, nom: 'Écran', prix: 900, stock: 0 },
  { id: 4, nom: 'Casque', prix: 240, stock: 3 },
];

export default function App() {
  const produitsDisponibles = produits.filter(
    produit => produit.stock > 0
  );

  const nombreProduits = produitsDisponibles.length;

  const valeurTotale = produits.reduce(
    (total, produit) => total + produit.prix * produit.stock,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Catalogue des produits</Text>

      <Text style={styles.texte}>
        Nombre de produits disponibles : {nombreProduits}
      </Text>

      <Text style={styles.texte}>
        Valeur totale du stock : {valeurTotale} MAD
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F2F7FD',
  },
  titre: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003796',
    marginBottom: 25,
  },
  texte: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
});