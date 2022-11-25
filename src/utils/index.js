export const filter = (data, filters) => {
  console.log("filters", filters);
  const fPredicateMap = {
    search: (term) => (v) =>
      !term ||
      `${v?.name},${v?.description},${(v?.price).toString()}`
        .split(",")
        .map((item) => {
          return term.split(" ").map((term) => {
            return (
              item
                .replace("(", "")
                .replace(")", "")
                .replace(" ", "")
                .toLowerCase()
                .indexOf(
                  term
                    .replace("(", "")
                    .replace(")", "")
                    .replace(" ", "")
                    .toLowerCase()
                ) !== -1
            );
          });
        })
        .map((item) => item.map((j) => j).join(","))
        .join(",")
        .includes("true"),
  };

  const getFilterPredicate = (fInput, fPredicateMap) =>
    Object.entries(fInput)
      .map(([filter_key, term]) => fPredicateMap[filter_key](term))
      .reduce(
        (p, f) => (item) => p(item) && f(item),
        (_) => true
      );

  return data.filter(getFilterPredicate(filters, fPredicateMap));
};
