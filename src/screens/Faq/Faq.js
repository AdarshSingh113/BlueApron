import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {useEffect, useState} from 'react';

const RenderItems = ({item}) => {
  const [showAnswer, setshowAnswer] = useState(false);
  return (
    <View>
      <TouchableOpacity onPress={() => setshowAnswer(!showAnswer)}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{width: 350}}>
            <Text
              style={{
                fontWeight: '800',
                fontSize: 14,
                color: 'black',
              }}>
              {item.question}
            </Text>
          </View>
          <Image
            style={{height: 20, width: 20, marginRight: 10}}
            source={
              showAnswer
                ? require('../../assets/image/minus.png')
                : require('../../assets/image/plus.png')
            }
          />
        </View>
      </TouchableOpacity>
      {showAnswer && (
        <View style={{marginTop: 13}}>
          <Text
            style={{
              color: 'gray',
              fontWeight: '400',
              fontSize: 12,
            }}>
            {item.answer}
          </Text>
        </View>
      )}
    </View>
  );
};

const Faq = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const data = {
    categories: [
      {
        name: 'Pay on Credit',
        questions: [
          {
            question: 'Is an online rent agreement valid?',
            answer:
              'Online rent agreements that are executed on e-stamp paper and signed by both the parties, are legally valid documents. Online rent agreement can be used as address proofs.',
          },
          {
            question: 'Will I get a hard copy of this online rent agreement?',
            answer:
              'As the entire process is completely online, you will not require a hard copy. You can get a copy of this agreement on your email ID, or you can download it in the PDF format.',
          },
          {
            question: 'How do I pay the house rent through Housing?',
            answer:
              'You will need to sign up and enter some basic details such as your landlord’s name, account information and your rent amount. This is a one-time activity only. The next time you will not be asked to enter all these details again.',
          },
          {
            question:
              'Can I pay rent through Housing if my landlord is not registered on it?',
            answer:
              'Of course! Your landlord will receive the rent even if he is not registered on Housing. If you have entered the correct details of the bank, the transaction will be completed and the landlord will be notified on successful completion through an SMS.',
          },
          {
            question:
              'How do I win rewards or cashbacks when I use Housing Pay Rent?',
            answer:
              'Offers, cashbacks, reward points, airmiles and much more await you when you pay through Housing. We have partnered with the best brands for the same. Credit card rewards vary from bank to bank. You can contact your bank to understand exactly how much you can expect when you spend your money online.',
          },
          {
            question: 'How do I pay the house rent through Housing?',
            answer:
              'You will need to sign up and enter some basic details such as your landlord’s name, account information and your rent amount. This is a one-time activity only. The next time you will not be asked to enter all these details again.',
          },
        ],
      },
      {
        name: 'Rent Agreement',
        questions: [
          {
            question: 'Question 1 for Rent Agreement?',
            answer: 'Answer 1 for Rent Agreement',
          },
          {
            question: 'Question 2 for Rent Agreement?',
            answer: 'Answer 2 for Rent Agreement',
          },
        ],
      },
      {
        name: 'Housing Premium',
        questions: [
          {
            question: 'Question 1 for Housing Premium?',
            answer: 'Answer 1 for Housing Premium',
          },
          {
            question: 'Question 2 for Housing Premium?',
            answer: 'Answer 2 for Housing Premium',
          },
        ],
      },
      {
        name: 'Packers & Movers',
        questions: [
          {
            question: 'Question 1 for Packers & Movers?',
            answer: 'Answer 1 for Packers & Movers',
          },
          {
            question: 'Question 2 for Packers & Movers?',
            answer: 'Answer 2 for Packers & Movers',
          },
        ],
      },
      {
        name: 'Home Interiors',
        questions: [
          {
            question: 'Question 1 for Home Interiors?',
            answer: 'Answer 1 for Home Interiors',
          },
          {
            question: 'Question 2 for Home Interiors?',
            answer: 'Answer 2 for Home Interiors',
          },
        ],
      },
      {
        name: 'Property Management',
        questions: [
          {
            question: 'Question 1 for Property Management?',
            answer: 'Answer 1 for Property Management',
          },
          {
            question: 'Question 2 for Property Management?',
            answer: 'Answer 2 for Property Management',
          },
        ],
      },
      {
        name: 'Home Loans',
        questions: [
          {
            question: 'Question 1 for Home Loans?',
            answer: 'Answer 1 for Home Loans',
          },
          {
            question: 'Question 2 for Home Loans?',
            answer: 'Answer 2 for Home Loans',
          },
        ],
      },
      {
        name: 'Personal Loans',
        questions: [
          {
            question: 'Question 1 for Personal Loans?',
            answer: 'Answer 1 for Personal Loans',
          },
          {
            question: 'Question 2 for Personal Loans?',
            answer: 'Answer 2 for Personal Loans',
          },
        ],
      },
      {
        name: 'Rent Now, Pay Later',
        questions: [
          {
            question: 'Question 1 for Rent Now, Pay Later?',
            answer: 'Answer 1 for Rent Now, Pay Later',
          },
          {
            question: 'Question 2 for Rent Now, Pay Later?',
            answer: 'Answer 2 for Rent Now, Pay Later',
          },
        ],
      },
      {
        name: 'Line of Credit',
        questions: [
          {
            question: 'Question 1 for Line of Credit?',
            answer: 'Answer 1 for Line of Credit',
          },
          {
            question: 'Question 2 for Line of Credit?',
            answer: 'Answer 2 for Line of Credit',
          },
        ],
      },
      {
        name: 'Housing Protect',
        questions: [
          {
            question: 'Question 1 for Housing Protect?',
            answer: 'Answer 1 for Housing Protect',
          },
          {
            question: 'Question 2 for Housing Protect?',
            answer: 'Answer 2 for Housing Protect',
          },
        ],
      },
    ],
    additional_info: {
      'Housing Pay Rent':
        'Your security is our priority. Housing does not store any of your confidential information and all your transactions are secure and encrypted.',
    },
  };
  useEffect(() => {
    setSelectedCategory(data.categories[0]);
  }, []);
  return (
    <ScrollView>
      <View style={{marginTop: 20}}>
        <View style={{marginHorizontal: 10}}>
          <Text style={{color: 'pink', fontWeight: 'bold', fontSize: 12}}>
            SUPPORT
          </Text>
          <Text style={{fontWeight: '600', fontSize: 20}}>
            Frequently asked questions
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 15,
            marginHorizontal: 10,
          }}>
          <Text style={{color: 'gray', fontWeight: '400', fontSize: 13}}>
            Questions about
          </Text>
          <FlatList
            data={data?.categories}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  height: 30,
                  width: 130,
                  backgroundColor:
                    selectedCategory?.name == item?.name
                      ? 'rgba(0, 0, 0, 0.2)'
                      : 'white',
                  marginHorizontal: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => setSelectedCategory(item)}>
                <Text>{item?.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        {selectedCategory && (
          <FlatList
            style={{marginTop: 30}}
            data={selectedCategory?.questions}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  borderWidth: 0.19,
                  borderColor: 'gray',
                  marginVertical: 10,
                  width: 400,
                }}></View>
            )}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return <RenderItems item={item} />;
            }}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default Faq;

const styles = StyleSheet.create({});
