"use strict";

import { arrayUtilities } from "necessary";

import { resolve } from "../utilities/continuation";

const { first, filter, compress } = arrayUtilities;

export function verifyFileContexts(fileContexts, verifiedFileContexts, forward, back) {
  return resolve(fileContexts, verifiedFileContexts, (fileContext, forward, back) => {
    return fileContext.verify(forward, back);
  }, forward, back);
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
