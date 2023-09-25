import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '@/store';
import { Repository } from '@/store/ducks/repositories/types';
import * as RepositoriesActions from '@/store/ducks/repositories/actions';
import RepositoryItem from '../RepositoryItem';
import Loading from '../Loading'; // Importe seu componente de animação de carregamento

interface StateProps {
  repositories: Repository[];
  loading: boolean;
}

interface DispatchProps {
  loadRequest(category: string): void;
}

type Props = StateProps & DispatchProps;

class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;
    const category = '';
    loadRequest(category);
  }

  render() {
    const { repositories, loading } = this.props;

    return (
      <div className="mt-20 grid w-full place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading ? (
          <Loading /> // Renderize o componente Loading enquanto loading for true
        ) : (
          repositories.map((repository) => (
            <RepositoryItem key={repository.id} repository={repository} />
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
  loading: state.repositories.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
