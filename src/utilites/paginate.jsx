import _ from "lodash";

export function Paginate(items, pagesize, size) {
  const pagesizeIndex = (pagesize - 1) * size;

  return _(items)
    .slice(pagesizeIndex)
    .take(size)
    .value();
}
