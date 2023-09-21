import { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from "@/store";
import { Repository } from "@/store/ducks/repositories/types";
import * as RepositoriesActions from "@/store/ducks/repositories/actions";
import RepositoryItem from "../RepositoryItem";
// import TenisCard from "../TenisCard";

interface StateProps {
  repositories: Repository[]
}

interface DispatcheProps {
  loadRequest(): void
}

type Props = StateProps & DispatcheProps

class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest()
  }

  render() {
    const { repositories } = this.props;

    return (
      <div className="grid place-items-center mt-20 w-full gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
         {repositories.map(repository => (
           <RepositoryItem key={repository.id} repository={repository}/>
           
           ))}
           </div>
    )
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
bindActionCreators(RepositoriesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);