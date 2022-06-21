import React from "react";
import {
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";

import DefaultLayout from "layouts/DefaultLayout/defaultLayout";

class LendingDetail extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
      this.linkhistory = [
        {
          url: '/',
          name: 'pages',
        },
        {
          url: '/lendings/',
          name: 'lending',
        },
        {
          url: `/lending/${this.props.router.params.pk}/`,
          name: 'lending',
        },
      ];
    }

    render() {
      const pk = this.props.router.params.pk;

      return (
            <DefaultLayout linkhistory={this.linkhistory}>
              <p>
                pk = {pk}
              </p>
            </DefaultLayout>
      );
    }
}

function LendingDetailWrapper() {
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();
  return <LendingDetail router={{location, navigate, params}} />
}
export default LendingDetailWrapper;