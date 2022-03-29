import { Fragment } from "preact";

const Paginator = (props: {
  page: number;
  lastPage: number;
  pageChanged: (page: number) => void;
}) => {
  const paginateNext = () => {
    if (props.page < props.lastPage) {
      props.pageChanged(props.page + 1);
    }
  };

  const paginatePrev = () => {
    if (props.page > 1) {
      props.pageChanged(props.page - 1);
    }
  };

  return (
    <Fragment>
      <nav class="level ml-6 mt-4">
        <div class="level-left">
          <ul class="pagination" role="navigation" aria-label="pagination">
            <li class="level-item">
              <a class="pagination-previous" onClick={paginatePrev}>
                Previous
              </a>
            </li>
            <li class="level-item">
              <a class="pagination-next" onClick={paginateNext}>
                Next
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export { Paginator };