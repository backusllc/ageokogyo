import gql from 'graphql-tag';
import { useQuery } from "@apollo/react-hooks";

export const useShopSettings = () => useQuery(query);

const query = gql`
query {
  shop {
    termsOfService {
      body
    }
    privacyPolicy {
      body
    }
    shippingPolicy {
      body
    }
    refundPolicy {
      body
    }
  }
}
`
