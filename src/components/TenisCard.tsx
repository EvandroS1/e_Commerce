import { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from "@/store";
import { Repository } from "@/store/ducks/repositories/types";
import * as RepositoriesActions from "@/store/ducks/repositories/actions";

interface StateProps {
  repositories: Repository[]
}

interface DispatcheProps {
  loadRequest(): void
}

type Props = StateProps & DispatcheProps

class TenisCard extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest()
  }

  render() {
    const { repositories } = this.props;

    return (
      <div>
      <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
        {repositories.map(repository => repository.title)}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{repositories.map(repository => repository.description)}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{repositories.map(repository => repository.category)}</div> 
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
      </div>
      
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
bindActionCreators(RepositoriesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TenisCard);
