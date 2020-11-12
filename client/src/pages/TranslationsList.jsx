import React, { Component, Fragment } from "react";
import api from "../api";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const Update = styled.div`
  color: #ef9b0f;
  cursor: pointer;
`;

const Delete = styled.div`
  color: #ff0000;
  cursor: pointer;
`;

class UpdateTranslation extends Component {
  updateTranslation = (event) => {
    event.preventDefault();

    api.updateTranslationById(this.props.id);
  };

  render() {
    return (
      <Update onClick={this.updateTranslation}>
        <FontAwesomeIcon icon={faEdit} />
      </Update>
    );
  }
}

class DeleteTranslation extends Component {
  deleteTranslation = (event) => {
    event.preventDefault();

    if (
      window.confirm(
        `Do you want to delete the translation ${this.props.id} permanently?`
      )
    ) {
      api.deleteTranslationById(this.props.id).then(() => {
        // TODO fix
        //this.props.updateTable();
      });
    }
  };

  render() {
    return (
      <Delete onClick={this.deleteTranslation}>
        <FontAwesomeIcon icon={faTrash} />
      </Delete>
    );
  }
}

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: this.props.data.length,
      translations: [],
    };
  }

  renderTableHeader() {
    return (
      <Fragment>
        <th>ID</th>
        <th>Language</th>
        <th>Timestamp</th>
        <th></th>
        <th></th>
      </Fragment>
    );
  }

  renderTableData() {
    const sortedData = this.props.data.sort((a, b) =>
      new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1
    );
    return sortedData.map((translation, index) => {
      const { _id, language, createdAt } = translation; //destructuring
      return (
        <tr key={_id}>
          <td>{_id}</td>
          <td>{language}</td>
          <td>
            <Moment format="MM/DD/YYYY HH:mm:ss">{createdAt}</Moment>
          </td>
          <td>
            <DeleteTranslation
              id={translation._id}
              updateTable={this.props.updateTable}
            />
          </td>
          {/*<td>
            <UpdateTranslation id={translation._id} />
          </td>*/}
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h4 id="title">Translation Log ({this.state.total})</h4>
        <table className="table table-sm" id="translations">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

class TranslationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translations: this.props.translations || [],
    };
  }

  componentDidMount = async () => {
    await api.getAllTranslations().then((translations) => {
      this.setState({
        translations: translations.data.data,
      });
    });
  };

  render() {
    const { translations } = this.state;

    let showTable = true;
    if (!translations.length) {
      showTable = false;
    }

    return (
      <Fragment>
        {showTable && (
          <Table data={translations} updateTable={this.props.updateTable} />
        )}
      </Fragment>
    );
  }
}

export default TranslationsList;
