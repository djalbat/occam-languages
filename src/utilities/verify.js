"use strict";

import { arrayUtilities } from "necessary";

import { asynchronousResolve } from "../utilities/continuation";

const { first, filter, compress } = arrayUtilities;

export function verifyFileContexts(fileContexts, verifiedFileContexts, contiunation) {
  return asynchronousResolve(fileContexts, verifiedFileContexts, (fileContext, contiunation) => {
    return fileContext.verify(contiunation);
  }, contiunation);
}

export function verifyTypePrefixes(typePrefixes, releaseContext) {
  let typePrefixesVerify = true;

  const typePrefixesLength = typePrefixes.length,
        compressedTypePrefixes = [  ///
          ...typePrefixes,
        ];

  compress(compressedTypePrefixes, (typePrefixA, typePrefixB) => {
    const typePrefixAName = typePrefixA.getName(),
          typePrefixBName = typePrefixB.getName();

    if (typePrefixAName !== typePrefixBName) {
      return true;
    }
  });

  const compressTypePrefixesLength = compressedTypePrefixes.length;

  if (typePrefixesLength > compressTypePrefixesLength) {
    filter(compressedTypePrefixes, (typePrefix) => {
      const typePrefixesIncludesTypePrefix = typePrefixes.includes(typePrefix);

      if (!typePrefixesIncludesTypePrefix) {
        return true;
      }
    });

    const firstTypePrefix = first(typePrefixes),
          typePrefix = firstTypePrefix, ///
          typePrefixString = typePrefix.getString();

    releaseContext.info(`The '${typePrefixString}' type prefix is duplicated.`)

    typePrefixesVerify = false;
  }

  return typePrefixesVerify;
}
