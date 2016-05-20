function CollectPlusReturnsLabel(container, guid) {
    "use strict";
    var _container = container;
    var _guid = guid;

    var entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
    };

    function escapeHtml(string) {
        return string ? String(string).replace(/[&<>"'\/]/g, function (s) {
            return entityMap[s];
        }) : '';
    }

    function pad(num, size) {
        var s = "0000000" + num;
        return s.substr(s.length - size);
    }

    function mattr(name) {
        return _container.getAttribute(name) || console.error('collect+ attribute missing [' + name + ']') || name.substr(5);
    }

    function oattr(name, def) {
        return _container.getAttribute(name) || def || '';
    }

    function today() {
        var date= new Date();
        return pad(date.getDate(), 2) + '/' + pad(date.getMonth() + 1, 2) + '/' + date.getFullYear();
    }

    function make() {
        var sequences = mattr('data-sequence').split(',');
        var html = '<style>##css##</style>';
        html += '<script>function printPage() { print(); }</script>';
        for (var i = 0; i < sequences.length; ++i) {
            var barcode = '8' + mattr('data-tac') + pad(sequences[i], 8) + 'A0' + mattr('data-depot-number');
            var label = '<table class="cp_table"><tr><td class="cp_header" colspan="2"><img width="189" height="75" title="" alt="" src="data:image/jpeg;base64,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" />';
            label += escapeHtml(mattr('data-client-name'));
            label += '</td></tr><tr><td class="cp_details_container"><div class="cp_cell"><label>Depot</label>';
            label += escapeHtml(mattr('data-depot-number') + ' ' + mattr('data-depot-short'));
            label += '</div><div class="cp_cell"><label>Service</label>';
            label += escapeHtml(mattr('data-service'));
            label += '</div><div class="cp_cell"><label>Label Date</label>';
            label += escapeHtml(oattr('data-label-date', today()));
            label += '</div><div class="cp_cell"><label>Returns Reference</label>';
            label += escapeHtml(oattr('data-returns-reference', 'N/A'));
            label += '</div></td><td class="cp_address"><label>&nbsp;</label>';
            label += '<div>' + escapeHtml(mattr('data-center-name')) + '</div>';
            label += '<div>' + escapeHtml(mattr('data-address-1')) + '</div>';
            label += '<div>' + escapeHtml(oattr('data-address-2')) + '</div>';
            label += '<div>' + escapeHtml(oattr('data-address-3')) + '</div>';
            label += '<div>' + escapeHtml(oattr('data-address-4')) + '</div>';
            label += '<div class="cp_postcode">';
            label += escapeHtml(mattr('data-address-postcode'));
            label += '</div></td></tr><tr class="cp_center"><td colspan="2"><label>Storekeeper Instruction</label>GIVE TO THE DRIVER</td></tr><tr class="cp_center"><td colspan="2"><div>';
            label += '<img class="cp_barcode" id="' + _guid + '-' + i +'"/>';
            label += '</div>';
            label += escapeHtml(barcode).replace(/0/g, '&Oslash;');
            label += '</td></tr></table>';
            html += label;
        }


        var ifrm = document.createElement("IFRAME");
        ifrm.setAttribute('id', 'cp_' + _guid);
        ifrm.style.display = 'none';
        document.body.appendChild(ifrm);

        ifrm = (ifrm.contentWindow) ? ifrm.contentWindow : (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument;
        ifrm.document.open();
        ifrm.document.write(html);
        ifrm.document.close();

        var style = document.createElement('STYLE');
        style.media = 'print';
        style.type = "text/css";
        style.innerText = '.cp_print_' + _guid + ' *{display:none} .cp_print_' + _guid + ' #cp_' + _guid + '{display:block !important;width:100%;height:210mm;border-width:0;overflow:hidden;}';
        document.body.appendChild(style);

        for (var i = 0; i < sequences.length; ++i) {
            JsBarcode(ifrm.document.getElementById(_guid + '-' + i), barcode, {width: 2, height: 125});
        }

        _container.addEventListener('click', function() {
            var className = document.body.className;
            document.body.className += ' cp_print_' + _guid;
            ifrm.focus();
            ifrm.printPage();
            document.body.className = className;
            return false;
        });
    }
    make();
}

document.addEventListener("DOMContentLoaded", function() {
    var labels = document.getElementsByClassName('cp_returns_label');
    for(var i= 0; i < labels.length; ++i) {
        CollectPlusReturnsLabel(labels[i], 'label-id-' + i)
    }
});
