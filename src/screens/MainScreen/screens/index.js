import ProductsScreen from './Products';
import MySubscriptionScreen from './MySubscription';
import PaymentScreen from './PaymentScreen';
import ScreenErrorActive from './ScreenErrorActive';
import TicketsScreen from './Tickets';

const ListScreens = {
  products: {
    name: 'products',
    label: 'Products',
  },
  tickets: {
    name: 'tickets',
    label: 'Tickets',
  },
  subscription: {
    name: 'subscription',
    label: 'My Subscription',
  },
  payment: {
    name: 'payment',
    label: 'Payment methods',
  },
  logout: {
    name: 'logout',
    label: 'Logout',
  },
};

export {
  ProductsScreen,
  ListScreens,
  MySubscriptionScreen,
  PaymentScreen,
  TicketsScreen,
  ScreenErrorActive
};
