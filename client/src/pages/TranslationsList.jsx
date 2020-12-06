import React from "react";
import apis from "../api";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const Delete = styled.div`
  color: #ff0000;
  cursor: pointer;
`;

const TranslationsList = ({ log, updateTotal, removeFromLog }) => {
  const DeleteTranslation = ({ id, language }) => {
    const deleteTranslation = () => {
      if (
        window.confirm(
          `Do you want to delete this translation (${language}) permanently?`
        )
      ) {
        apis.deleteTranslationById(id).then(() => {
          updateTotal(language, -1);
          removeFromLog(id);
        });
      }
    };

    return (
      <Delete onClick={deleteTranslation}>
        <FontAwesomeIcon icon={faTrash} />
      </Delete>
    );
  };

  // Show max. 10 latest translations
  const TableData = () => {
    return log.slice(0, 10).map((translation) => {
      const { _id, language, createdAt } = translation; //destructuring
      return (
        <tr key={_id}>
          <td>
            <Moment format="MM/DD/YYYY HH:mm:ss">{createdAt}</Moment>
          </td>
          <td>{language}</td>
          <td>
            <DeleteTranslation id={translation._id} language={language} />
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h4 id="title">Translation Log</h4>
      <table className="table table-sm" id="translations">
        <tbody>
          <tr>
            <th>Timestamp</th>
            <th>Language</th>
            <th></th>
          </tr>
          <TableData />
        </tbody>
      </table>
    </div>
  );
};

export default TranslationsList;
